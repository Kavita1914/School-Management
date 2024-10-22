import React from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import { useState } from "react";

const CustomDateRangePicker = ({
  startDate,
  startDateId,
  endDate,
  endDateId,
  maxDate,
  isDisabledOutsideRange,
  isMaxDateValidation,
  onDatesChange,
}) => {
  const [focusedInput, setFocusedInput] = useState(null);

  const _maxDateValidation = () => {
    if (isMaxDateValidation && maxDate) {
      return moment(maxDate);
    }
    return moment();
  };

  return (
    <DateRangePicker
      startDate={startDate} // momentPropTypes.momentObj or null,
      startDateId={`startDateId_${startDateId}`} // PropTypes.string.isRequired,
      endDate={endDate} // momentPropTypes.momentObj or null,
      endDateId={`endDateId_${endDateId}`} // PropTypes.string.isRequired,
      onDatesChange={({ startDate, endDate }) => {
        onDatesChange(startDate, endDate);
      }} // PropTypes.func.isRequired,
      focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={(newFocusInput) => setFocusedInput(newFocusInput)}
      isOutsideRange={(day) =>
        isDisabledOutsideRange || (isMaxDateValidation && maxDate)
          ? moment().endOf("day").diff(day) <= 0 ||
            (isMaxDateValidation &&
              maxDate &&
              moment(day) > _maxDateValidation())
          : null
      }
      maxDate={isDisabledOutsideRange ? _maxDateValidation() : null}
      numberOfMonths={1}
    />
  );
};

export default CustomDateRangePicker;
