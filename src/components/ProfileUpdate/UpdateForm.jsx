import FormInput from "../Form/FormInput";
import FormLabel from "../FormLabel";
import FormRow from "../FormRow";

const UpdateForm = () => {
  return (
    <div className="grid grid-cols-1 p-10 ">
      <FormRow>
        <FormLabel label="Name" />
        <FormInput type="text" placeholder="Eric movchan" />
      </FormRow>

      <FormRow>
        <FormLabel label="Email" />
        <FormInput type="email" placeholder="test@gmail.com" />
      </FormRow>

      <FormRow>
        <FormLabel label="Username" />
        <FormInput type="text" placeholder="username" />
      </FormRow>

      <FormRow>
        <FormLabel label="Password" />
        <FormInput type="password" placeholder="********" />
      </FormRow>

      {/* TODO:  Set to disabeled whether no field has changed */}
      <button className="mt-[40%] btn">Update</button>
    </div>
  );
};

export default UpdateForm;
