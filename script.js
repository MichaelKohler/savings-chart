function setupCharts() {
  const labels = new Set();
  const datasets = Object.entries(window.SAVINGS_CHART_DATA).map(([accountName, balances]) => {
    Object.keys(balances.data).forEach((month) => labels.add(month));

    return {
      label: accountName,
      data: Object.values(balances.data).reverse(),
      backgroundColor: balances.color,
      borderColor: balances.color,
      borderWidth: 1,
    };
  });

  new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
      labels: Array.from(labels).reverse(),
      datasets,
    },
    options: {
      responsive: true,
      scales: {
        y: {
          min: 0,
        },
      },
    },
  });

  new Chart(document.getElementById('stackedChart'), {
    type: 'bar',
    data: {
      labels: Array.from(labels).reverse(),
      datasets,
    },
    options: {
      responsive: true,
      scales: {
        x: {
          stacked: 'single',
        },
        y: {
          stacked: 'single',
        },
      },
    },
  });

  const totalData = Object.values(window.SAVINGS_CHART_DATA).reduce((totals, bankDetails) => {
    Object.entries(bankDetails.data).forEach(([month, amount]) => {
      totals[month] = typeof totals[month] !== 'undefined' ? totals[month] : 0;
      totals[month] = totals[month] + amount;
    });

    return totals;
  }, {});

  const totalDataSet = {
    label: 'Total without outstanding taxes',
    data: Object.values(totalData).reverse(),
    backgroundColor: '#1e293b',
    borderColor: '#1e293b',
    borderWidth: 1,
  }

  new Chart(document.getElementById('totalLineChart'), {
    type: 'line',
    data: {
      labels: Array.from(labels).reverse(),
      datasets: [totalDataSet],
    },
    options: {
      responsive: true,
    },
  });
}

document.addEventListener("DOMContentLoaded", setupCharts);
