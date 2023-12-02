import Button from '@shared/ui/Button';
import Checkbox from '@shared/ui/Checkbox';
import Input from '@shared/ui/Input';
import LinkButton from '@shared/ui/LinkButton';
import Form from '@widgets/form/Form';
import FormHeader from '@widgets/form/ui/FormHeader';
import FormRow from '@widgets/form/ui/FormRow';

const UncontrolledForm = () => (
  <>
    <LinkButton to="/">Back</LinkButton>
    <Form>
      <FormHeader title="Register" subtitle="Welcome to our platform! 😎" />

      <FormRow label="Name">
        <Input id="name" type="text" placeholder="Enter yout name..." />
      </FormRow>

      <FormRow label="Age">
        <Input id="age" type="number" placeholder="Enter yout age..." />
      </FormRow>

      <FormRow label="Email">
        <Input id="email" type="text" placeholder="Enter yout email..." />
      </FormRow>

      <FormRow label="Password">
        <Input
          id="password"
          type="password"
          placeholder="Enter yout password..."
        />
      </FormRow>

      <FormRow htmlFor="confirmPassword" label="Confirm password">
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Enter your confirm password..."
        />
      </FormRow>

      <FormRow label="Gender">
        <select id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </FormRow>

      <FormRow label="Country">
        <Input
          id="country"
          list="country-list"
          placeholder="Enter your contry..."
        />

        <datalist id="country-list">
          <option value="United States of America">US</option>
          <option value="Ukraine">UA</option>
          <option value="Poland">PL</option>
          <option value="Germany">DE</option>
        </datalist>
      </FormRow>

      <FormRow label="Picture">
        <Input id="picture" type="file" />
      </FormRow>

      <FormRow
        htmlFor="termsAndConditions"
        label="I accept the terms and conditions"
        className="flex flex-row-reverse items-center justify-end">
        <Checkbox id="termsAndConditions" type="checkbox" />
      </FormRow>

      <Button className="mt-4" submit>
        Submit
      </Button>
    </Form>
  </>
);

export default UncontrolledForm;
