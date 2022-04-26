window.SAVINGS_CHART_DATA = {
  "BankA": {
    color: "#0099ff",
    data: {
      // This currently assumes that the keys are sorted by date
      // with the latest entry first.
      // Additionally it also assumes every dataset to have the
      // same amount of data points.
      //
      // TODO: Make it dynamic and sort it.
      "2022-04": 2,
      "2022-03": 5,
    }
  },
  "BankB": {
    color: "#000099",
    data: {
      "2022-04": 0,
      "2022-03": 2,
    }
  },
};
