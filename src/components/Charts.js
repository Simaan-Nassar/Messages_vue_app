import { Bar } from 'vue-chartjs'

export default {

  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          maintainAspectRatio: false,
          responsive: true,
          borderWidth: [500,500],
          data: [40, 20, 12, 19, 10, 10, 19, 10, 40, 20, 12, 11]
        }
      ]
    })
  }
}  
