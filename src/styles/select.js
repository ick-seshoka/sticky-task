import { theme } from "./theme";

const { colors, fontSize } = theme;

export const navSelectMember = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: colors.blueGray,
  }),

  contaienr: (provided, state) => ({
    ...provided,
    borderColor: colors.blueGray,
    minHeight: "32px",
  }),

  control: (provided, state) => ({
    ...provided,
    borderColor: colors.blueGray,
    fontSize: fontSize.title,
  }),
  input: (provided, state) => ({
    ...provided,
    fontSize: fontSize.medium,
    fontWeight: "bold",
    color: colors.blueGray,
  }),
};
