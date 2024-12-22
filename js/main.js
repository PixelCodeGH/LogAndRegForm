document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const forgotForm = document.getElementById('forgotForm');
    const loginCard = document.getElementById('loginCard');
    const forgotCard = document.getElementById('forgotCard');
    const showForgotPassword = document.getElementById('showForgotPassword');
    const backToLogin = document.getElementById('backToLogin');
    const dashboard = document.getElementById('dashboard');

    // Switch to forgot password form
    showForgotPassword.addEventListener('click', () => {
        loginCard.classList.add('hidden');
        forgotCard.classList.remove('hidden');
    });

    // Switch back to login form
    backToLogin.addEventListener('click', () => {
        forgotCard.classList.add('hidden');
        loginCard.classList.remove('hidden');
    });

    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        document.querySelector('.auth-page').style.display = 'none';
        dashboard.classList.remove('hidden');
        initCharts();
    });

    // Handle forgot password form submission
    forgotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('resetEmail').value;
        alert(`Password reset link sent to ${email}`);
        // Switch back to login after submission
        forgotCard.classList.add('hidden');
        loginCard.classList.remove('hidden');
    });

    function initCharts() {
        const marketChart = new Chart(document.getElementById('marketChart'), {
            type: 'line',
            data: {
                labels: Array.from({length: 12}, (_, i) => `${i}:00`),
                datasets: [{
                    label: 'Market Value',
                    data: [45000, 47000, 44000, 46500, 48000, 46000, 47500, 48500, 48000, 49000, 50000, 49500],
                    borderColor: '#00F5A0',
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: true,
                    backgroundColor: 'rgba(0, 245, 160, 0.1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            color: '#8F9BB3'
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(255,255,255,0.05)'
                        },
                        ticks: {
                            color: '#8F9BB3'
                        }
                    }
                }
            }
        });

        const createMiniChart = (elementId, data, color) => {
            return new Chart(document.getElementById(elementId), {
                type: 'line',
                data: {
                    labels: Array.from({length: data.length}, (_, i) => i),
                    datasets: [{
                        data: data,
                        borderColor: color,
                        tension: 0.4,
                        borderWidth: 2,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        x: {
                            display: false
                        },
                        y: {
                            display: false
                        }
                    }
                }
            });
        };

        createMiniChart('btcChart', [42000, 44000, 43000, 47000, 45000, 48000], '#F7931A');
        createMiniChart('ethChart', [3000, 3200, 3100, 3400, 3300, 3500], '#627EEA');
    }
}); 

