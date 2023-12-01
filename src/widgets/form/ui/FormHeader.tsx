import { FC } from 'react';

type FormHeaderProps = {
  title: string;
  subTitle: string;
};

const FormHeader: FC<FormHeaderProps> = ({ title, subTitle }) => (
  <article className="space-y mb-4">
    <h1 className="text-2xl">{title}</h1>
    <p className="text-zinc-500">{subTitle}</p>
  </article>
);

export default FormHeader;
