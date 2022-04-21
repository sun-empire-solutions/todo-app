import { IFilter } from "../types";

const Filter = ({ filter, onFilterChange }: IProps) => {
  const handleFilterChange = (event) => {
    onFilterChange(event.target.name);
  };

  const isSelected = (value: string) => (value === filter ? "selected" : "");

  return (
    <div className="filter">
      <div className="filter__options">
        <button
          name="all"
          className={isSelected("all")}
          onClick={handleFilterChange}
          role="button"
        >
          All
        </button>
        <button
          name="active"
          className={isSelected("active")}
          onClick={handleFilterChange}
          role="button"
        >
          Active
        </button>
        <button
          name="completed"
          className={isSelected("completed")}
          onClick={handleFilterChange}
          role="button"
        >
          Completed
        </button>
      </div>
      <div className="filter-message">
        <p>Drag and drop to reorder list</p>
      </div>
    </div>
  );
};

type IProps = { filter: IFilter; onFilterChange: (filter: string) => void };

export { Filter };
