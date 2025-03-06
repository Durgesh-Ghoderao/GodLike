document.getElementById('connectWalletButton').addEventListener('click', function() {
    const role = document.querySelector('input[name="userRole"]:checked');

    if (!role) {
        alert("Please select a role: Job Seeker or Recruiter.");
        return;
    }

    const userRole = role.value;
    
    // Simulating wallet connection (replace with actual wallet integration)
    alert(`Connecting wallet as ${userRole}.`);

    // Implement actual wallet connection logic here (e.g., using MetaMask)

    // Redirect based on user role (job seeker or recruiter)
    if (userRole === 'jobSeeker') {
        window.location.href = 'jobSeekerDashboard.html'; // Example redirect for job seekers
    } else {
        window.location.href = 'recruiterDashboard.html'; // Example redirect for recruiters
    }
});
