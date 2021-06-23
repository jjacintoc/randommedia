import React, { useReducer, useState, useEffect } from "react";
import axios from "../../shared/axios";
import showFlash from "../../shared/showFlash";

// Generates the date for the url from a date object
const generateDay = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const doubleDigitMonth = month >= 10 ? month : `0${month}`;
  return `${year}-${doubleDigitMonth}-${day}`;
};

const shiftReducer = (currentShift, action) => {
  switch (action.type) {
    case "SET-SELECTED-DATE":
      return {
        selectedDate: action.date,
        selectedShift: "",
        dayShiftList: [],
        shift: action.shift,
        step: 1,
      };
    case "SET-DAY-SHIFT-LIST":
      return {
        ...currentShift,
        dayShiftList: action.dayShiftList,
      };
    case "SET-SELECTED-SHIFT":
      return {
        ...currentShift,
        selectedShift: action.selectedShift,
        step: 2,
      };
    case "SET-SHIFT":
      return {
        ...currentShift,
        shift: action.shift,
        step: 3,
      };
    case "RESET":
      return {
        selectedDate: new Date(),
        selectedShift: "",
        dayShiftList: [],
        shift: action.shift,
        step: 0,
      };
    default:
      throw new Error("Should not get there!");
  }
};

/**
 * Costum Hook
 * @param {*} dateSelectUrl
 * @param {*} shiftSelectUrl
 */
const useShift = (
  dateSelectUrl,
  shiftSelectUrl,
  currentUser,
  defaultAvatar,
  shift,
  shift1
) => {
  // Default Shift
  let defaultShift = {
    user: {
      id: 0,
      full_name: "Pick a Shift",
      avatar: defaultAvatar,
    },
  };

  if (currentUser) {
    defaultShift = {
      user: currentUser,
    };
  }

  const [userSwap, dispatch] = useReducer(shiftReducer, {
    selectedDate: new Date(),
    selectedShift: "",
    dayShiftList: [],
    shift: defaultShift,
    step: 0,
  });

  const reset = () => {
    dispatch({ type: "RESET", shift: defaultShift });
  };

  const inicializeDates = (data) => {
    return {
      ...data,
      ends_at: new Date(data.ends_at),
      starts_at: new Date(data.starts_at),
    };
  };

  // Fetches the available shits on that date
  const onSelectedDateChange = (date) => {
    dispatch({ type: "SET-SELECTED-DATE", date: date, shift: defaultShift });
    let dateChangeUrl = `${dateSelectUrl}?date=${generateDay(
      date
    )}&shift_list=true&shift_swaps=true`;
    if (shift1)
      if (shift1.id) {
        dateChangeUrl = `${dateChangeUrl}&shift1=${shift1.id}`;
      }

    axios
      .get(dateChangeUrl)
      .then((response) => {
        if (response.status == 200)
          dispatch({
            type: "SET-DAY-SHIFT-LIST",
            dayShiftList: response.data.data,
          });
        else showFlash("danger", "Something went wrong :'(");
      })
      .catch((err) => {
        showFlash("danger", "An error occurred while fetching date data.");
      });
  };

  // Fetches the selected shift and saves it the state
  const onSelectedShiftChange = (shift) => {
    dispatch({ type: "SET-SELECTED-SHIFT", selectedShift: shift.id });
    const shiftChangeUrl = `${shiftSelectUrl}/${shift.id}.json?includes=user`;

    axios
      .get(shiftChangeUrl)
      .then((response) => {
        if (response.status == 200)
          dispatch({
            type: "SET-SHIFT",
            shift: inicializeDates(response.data.data),
            showList: true,
          });
        else showFlash("danger", "Somethig went wrong :'(");
      })
      .catch((err) => {
        showFlash("danger", "An error occurred while fetching shift data.");
      });
  };

  useEffect(() => {
    if (shift) {
      onSelectedShiftChange({ id: shift });
    }
  }, [shift]);

  return [
    userSwap.step,
    { value: userSwap.selectedDate, onClickDay: onSelectedDateChange },
    { value: userSwap.selectedShift, onClick: onSelectedShiftChange },
    userSwap.dayShiftList,
    userSwap.shift,
    reset,
  ];
};

export default useShift;
