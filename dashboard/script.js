document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('taskCompletionChart').getContext('2d');
  
    const taskCompletionChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [{
          label: 'Tasks Completed',
          data: [10, 15, 12, 20, 25, 30],
          backgroundColor: 'rgba(0, 123, 255, 0.7)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
  