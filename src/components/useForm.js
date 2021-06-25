import {useState} from react;

const useForm = (initialFieldValues, validate) => {
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})

      //trata dos inputs do form
 const handleInputChange = (e) => {
    const { name, value } = e.target;
    const fieldValue = {[name]: value}
    setValues({
      ...values,
      [name]: value,
    });
  };

}


const resetForm = ()=> {

}