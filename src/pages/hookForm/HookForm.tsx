import Button from '@shared/ui/Button';
import Input from '@shared/ui/Input';
import Form from '@widgets/form/Form';
import FormRow from '@widgets/form/ui/FormRow';

const HookForm = () => (
  <Form>
    <article className="space-y">
      <h1 className="text-2xl">Register</h1>
      <p className="text-zinc-500">Welcome to our platform! 😎</p>
    </article>

    <FormRow label="Name">
      <Input id="Name" type="text" placeholder="Enter yout name..." />
    </FormRow>

    <FormRow label="Age">
      <Input
        id="Age"
        type="number"
        min="0"
        placeholder="Enter yout age..."
        className=""
      />
    </FormRow>

    <FormRow label="Email">
      <Input id="Email" type="text" placeholder="Enter yout email..." />
    </FormRow>

    <FormRow label="Password">
      <Input id="Password" type="text" placeholder="Enter yout password..." />
    </FormRow>

    <FormRow label="Confirm password">
      <Input
        id="Confirm password"
        type="text"
        placeholder="Enter your email..."
      />
    </FormRow>

    <Button submit>Submit</Button>
  </Form>
);

export default HookForm;
