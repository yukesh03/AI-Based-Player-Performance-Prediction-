    const ctx1 = document.getElementById('performanceChart').getContext('2d');
    const ctx2 = document.getElementById('injuryChart').getContext('2d');

    const performanceChart = new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Game 1', 'Game 2', 'Game 3', 'Game 4'],
        datasets: [{
          label: 'Performance Rating',
          data: [6.5, 7.0, 7.8, 8.2],
          borderColor: '#3b82f6',
          fill: false,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });

    const injuryChart = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Speed', 'Stamina', 'Agility'],
        datasets: [{
          label: 'Risk Factor',
          data: [2, 4, 3],
            backgroundColor: ['#f87171', '#34d399', '#facc15'],
          
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });

    function openModal() {
      document.getElementById('profileModal').style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('profileModal').style.display = 'none';
    }

    function toggleTheme() {
      const body = document.body;
      const isDark = body.getAttribute('data-theme') === 'dark';
      body.setAttribute('data-theme', isDark ? 'light' : 'dark');
      body.style.backgroundColor = isDark ? '#f8fafc' : '#111827';
      body.style.color = isDark ? '#111827' : '#f8fafc';
    }

    function showTab(tab) {
      document.getElementById('overviewTab').style.display = tab === 'overview' ? 'block' : 'none';
      document.getElementById('statsTab').style.display = tab === 'stats' ? 'block' : 'none';
      document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
      document.querySelector(`.tabs button[onclick*="${tab}"]`).classList.add('active');
    }

    function submitProfile(event) {
      event.preventDefault();
      const name = document.getElementById('nameInput').value;
      const position = document.getElementById('positionInput').value;
      alert(`Profile Updated:\nName: ${name}\nPosition: ${position}`);
      showNotification("Profile successfully updated");
      closeModal();
    }

    
    function navigateTo(section) {
      document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
      document.getElementById(section).style.display = 'grid';
      showNotification(`${section.charAt(0).toUpperCase() + section.slice(1)} loaded`);
    }

    function showNotification(message) {
      const notification = document.getElementById('notification');
      notification.textContent = message;
      notification.classList.add('show');
      setTimeout(() => {
        notification.classList.remove('show');
      }, 4000);
    }

    // Simulate Live Updates

    // Live Update Simulation
    function simulateLiveUpdates() {
      setInterval(() => {
        const value = Math.round(Math.random() * 10);
        performanceChart.data.datasets[0].data.push(value);
        performanceChart.data.labels.push(`Game ${performanceChart.data.labels.length + 1}`);
        performanceChart.update();
      }, 5000);
    }



    simulateLiveUpdates();
