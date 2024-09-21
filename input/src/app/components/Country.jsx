import Link from "next/link";

const Country = (props) => {
  const countryDet = props.data;
  return (
    <div className="compContainer">
      <div className="name">{countryDet.name.common}</div>
      <img src={countryDet.flags.png} className="img" />
      <div className="text">
        Official name:
        <div className="dynamic-text">{countryDet.name.official}</div>
      </div>
      <div className="text">
        Capital:
        <div className="dynamic-text">{countryDet.capital}</div>
      </div>
      <div className="text">
        Region:
        <div className="dynamic-text">{countryDet.region}</div>
      </div>
      <div className="text">
        Population:
        <div className="dynamic-text">
          {countryDet.population.toLocaleString()}
        </div>
      </div>
      <div className="text">
        Area:
        <div className="dynamic-text">{countryDet.area.toLocaleString()}</div>
      </div>
      <div className="text">
        Timezones:
        <div className="dynamic-text">{countryDet.timezones}</div>
      </div>
      <div className="name">Maps</div>
      <Link href={countryDet.maps.googleMaps}>
        {countryDet.maps.googleMaps}
      </Link>
      <Link href={countryDet.maps.openStreetMaps}>
        {countryDet.maps.openStreetMaps}
      </Link>
      <div className="name">Coat of Arms</div>
      <img src={countryDet.coatOfArms.png} className="coatOfArms" />
    </div>
  );
};
export default Country;
