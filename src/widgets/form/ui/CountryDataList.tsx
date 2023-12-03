import { FC } from 'react';

import useAppSelector from '@shared/lib/hooks/useAppSelector';
import selectCountryList from '@shared/lib/selectors/selectCountryList';

const CountryDataList: FC<{ id: string }> = ({ id }) => {
  const countryList = useAppSelector(selectCountryList);

  return (
    <datalist id={id}>
      {countryList.map((country) => (
        <option key={country.code} value={country.name}>
          {country.code}
        </option>
      ))}
    </datalist>
  );
};

export default CountryDataList;
