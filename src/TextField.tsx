import React, { FC } from 'react';

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text?: string;
  person: Person;
}

const TextField: FC<Props> = ({ person, text }) => (
  <div>
    <input type="text" />
  </div>
);

export default TextField;
