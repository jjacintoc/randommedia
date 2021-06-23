import React, { useState } from "react";
/*
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  Alert,
} from "react-native";
import { Formik, FieldArray } from "formik";

//SARD
import { Colors } from "app/styles/index";
import { Text, Button, Input, CheckBox } from "@/components/index";

import FileEntry from "@/components/molecules/FilePicker/FileEntry";
import FilePickerMenu from "@/components/molecules/FilePicker/FilePickerMenu";
import DatePicker from "@/components/atoms/DatePicker";
import Picker from "@/components/atoms/Picker";
import InlineCheckbox from "@/components/atoms/InlineCheckBox";
import Label from "@/components/atoms/Label";
import InlineLabel from "@/components/atoms/InlineLabel";
import Card from "@/components/atoms/Card";

import * as Yup from "yup";
*/

function AddEvidenceForm(props) {
  const [isVisible, setIsVisible] = useState(false);

  const portfolios = [
    { label: "portfolio 1", value: "portfolio1" },
    { label: "portfolio 2", value: "portfolio2" },
    { label: "portfolio 3", value: "portfolio3" },
  ];

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const initialValues = {
    title: "",
    description: "",
    toggleKeepEvidence: false,
    evidenceExpiryDate: new Date(),
    files: [],
  };

  let schema = Yup.object().shape({
    title: Yup.string()
      .min(3, "Title too Short!")
      .max(40, "Title is too Long!")
      .required("Required"),
    files: Yup.array().min(1),
  });

  const onSubmit = (values) => {
    props.onSubmit();
    console.log(values);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      <Card>
        {/* Title */}
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={schema}
        >
          {({
            handleChange,
            values,
            handleSubmit,
            errors,
            isValid,
            isSubmitting,
            touched,
            handleBlur,
            setFieldValue,
          }) => (
            <>
              <Label name="Title">
                <Input
                  onChangeText={handleChange("title")}
                  onBlur={handleBlur("title")}
                  value={values.title}
                  errorMessage={errors.title}
                />
              </Label>

              <Label name="Description">
                <Input
                  onChangeText={handleChange("description")}
                  onBlur={handleBlur("description")}
                  value={values.description}
                  errorMessage={errors.description}
                />
              </Label>

              {/* Keep Evidence */}
              {/* <InlineLabel name="Keep Evidence for Next Appraisal"> */}
              <InlineCheckbox
                center
                name="Keep Evidence for Next Appraisal"
                onValueChange={(checked) =>
                  setFieldValue("toggleKeepEvidence", checked)
                }
                onBlur={handleBlur("toggleKeepEvidence")}
                checked={values.toggleKeepEvidence}
              />

              {/* </InlineLabel> */}

              {/* Keep Evidence Expiry*/}
              <InlineLabel name="OR Expiry date">
                <DatePicker
                  value={values.evidenceExpiryDate}
                  onChange={(date) => {
                    setFieldValue("evidenceExpiryDate", date);
                  }}
                />
              </InlineLabel>

              {/* Attach to */}
              <Label name="Attach to">
                <Picker
                  items={portfolios}
                  value={values.portfolio}
                  onChange={handleBlur("portfolio")}
                />
              </Label>

              <Label name="Attachments">
                <FieldArray
                  name="files"
                  render={(arrayHelpers) => (
                    <>
                      <FlatList
                        style={styles.attachments}
                        data={values.files}
                        renderItem={(file) => (
                          <FileEntry
                            index={file.index}
                            replace={arrayHelpers.replace}
                            fileObj={file.item}
                            files={values.files}
                            onRemove={() => arrayHelpers.remove(file.index)}
                          />
                        )}
                        keyExtractor={(item) => item.path}
                      />
                      <Button
                        title="Attach eDocument"
                        onPress={toggleVisibility}
                      />

                      <FilePickerMenu
                        isVisible={isVisible}
                        setIsVisible={setIsVisible}
                        files={values.files}
                        addFile={(file) => arrayHelpers.push(file)}
                      />
                    </>
                  )}
                />
                <Text>{errors.files}</Text>
              </Label>

              <Button
                title="Success"
                onPress={handleSubmit}
                disabled={!isValid}
              />
            </>
          )}
        </Formik>
      </Card>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  attachments: {
    // flex: 1
  },
  container: {
    // flexWrap: 'wrap',
    flex: 1,
    backgroundColor: Colors.devColor1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddEvidenceForm;
