import { theme } from "./theme";

const { colors, fontSize } = theme;

export const navSelectMember = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: colors.blueGray,
  }),

  container: (provided, state) => ({
    ...provided,
    borderColor: colors.blueGray,
    // minHeight: "30px",
    // height: "30px",
  }),

  control: (provided, state) => ({
    ...provided,
    borderColor: colors.blueGray,
    fontSize: fontSize.title,
    minHeight: "30px",
    height: "30px",
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    top: "-10%",
  }),

  input: (provided, state) => ({
    ...provided,
    fontSize: fontSize.medium,
    // fontWeight: "bold",
    // color: colors.blueGray,
  }),

  indicatorsContainer: (provided, state) => ({
    ...provided,
    top: "-10%",
    position: "relative",
  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: colors.blueGray,
  }),

  clearIndicator: (provided, state) => ({
    ...provided,
    color: colors.blueGray,
  }),

  singleValue: (provided, state) => ({
    ...provided,
    color: colors.blueGray,
    fontWeight: "500",
  }),
};

export const taskMemberSelect = {
  container: (provided, state) => ({
    ...provided,
    transform: "scale(0.7)",
    fontSize: theme.medium,
    fontWeight: "600",
    left: "-1.5626em",
  }),

  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "none",
  }),

  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none",
  }),

  singleValue: (provided, state) => ({
    ...provided,
    color: "rgba(55, 71, 79, 0.8)",
    fontWeight: "600",
  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: "rgba(55, 71 ,796, 085)",
    fontWeight: "600",
  }),
};

export const statusSelect = {
  container: (provided, state) => ({
    ...provided,
    transform: "scale(0.7)",
    fontSize: theme.medium,
    fontWeight: "600",
    left: "-1.5626em",
  }),

  control: (provided, state) => ({
    ...provided,
    backgroundColor: "rgba(255,255,255, 0.5)",
  }),
};

export const prioritySelect = {
  container: (provided, state) => ({
    ...provided,
    transform: "scale(0.7)",
    fontSize: theme.medium,
    fontWeight: "600",
    left: "-1.75em",
  }),

  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "none",
  }),

  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none",
  }),
};
