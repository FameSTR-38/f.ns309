import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";
//get all unique values

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    kits,
  } = context;
  //get unique ypes
  let types = getUnique(rooms, "type");
  //add all
  types = ["all", ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="Бүртгэлтэй машинууд" />
      <form className="filter-form">
        {/* select type*/}
        <div className="form-group">
          <label htmlFor="type">Спортын төрөл</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type*/}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price"> Дээд хурдны амжилт {price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">horespower (HP)</label>
          <div className="size-inputs">
            {"UNDER HP"}&nbsp;
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Клубд харъяалалтай</label>
          </div>
        </div>
       
        {/* end of extras */}
      </form>
    </section>
  );
}
