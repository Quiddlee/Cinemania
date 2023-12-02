import { FC } from 'react';

type FormHeaderProps = {
  title: string;
  subtitle?: string;
};

const FormHeader: FC<FormHeaderProps> = ({ title, subtitle }) => (
  <article className="space-y mb-4">
    <h1 className="text-2xl">{title}</h1>
    {subtitle && <p className="text-zinc-500">{subtitle}</p>}
  </article>
);

export default FormHeader;
