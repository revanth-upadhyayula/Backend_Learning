// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Mock dataset of profiles
    const profilesData = [
        {
            name: "Arjun Patel",
            age: 32,
            community: "Hindu",
            job_location: "San Francisco",
            profession: "Software Engineer",
            image: "profile2.png"
        },
        {
            name: "Priya Sharma",
            age: 28,
            community: "Hindu",
            job_location: "New York",
            profession: "Doctor",
            image: "profile1.png"
        },
        {
            name: "Rahul Singh",
            age: 30,
            community: "Sikh",
            job_location: "Los Angeles",
            profession: "Engineer",
            image: "profile3.png"
        },
        {
            name: "Anjali Desai",
            age: 29,
            community: "Hindu",
            job_location: "San Francisco",
            profession: "Teacher",
            image: "profile4.png"
        },
        {
            name: "Vikram Rao",
            age: 34,
            community: "Hindu",
            job_location: "Chicago",
            profession: "Consultant",
            image: "profile5.png"
        }
    ];

    // Function to toggle the profile dropdown
    window.toggleProfileMenu = function () {
        const dropdown = document.getElementById('profileDropdown');
        console.log('Toggling profile dropdown');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    };

    // Function to redirect to the profile page
    window.editProfile = function () {
        console.log('Redirecting to profile page');
        window.location.href = 'profile.html'; // Redirect to profile.html
    };

    // Function to search profiles based on filters
    window.searchProfiles = function () {
        const community = document.getElementById('community').value.trim().toLowerCase();
        const jobLocation = document.getElementById('job_location').value.trim().toLowerCase();
        const profilesContainer = document.getElementById('profiles');

        console.log('Searching profiles with filters:', { community, jobLocation });

        // Filter profiles
        const filteredProfiles = profilesData.filter(profile => {
            const matchesCommunity = community ? profile.community.toLowerCase().includes(community) : true;
            const matchesJobLocation = jobLocation ? profile.job_location.toLowerCase().includes(jobLocation) : true;
            return matchesCommunity && matchesJobLocation;
        });

        // Clear previous results
        profilesContainer.innerHTML = '';

        // Display filtered profiles
        if (filteredProfiles.length === 0) {
            profilesContainer.innerHTML = '<p>No profiles found.</p>';
            return;
        }

        filteredProfiles.forEach(profile => {
            const profileCard = document.createElement('div');
            profileCard.className = 'profile-card';
            profileCard.innerHTML = `
                <img src="${profile.image}" alt="${profile.name}">
                <div class="profile-info">
                    <h3>${profile.name}, ${profile.age}</h3>
                    <p>Community: ${profile.community}</p>
                    <p>Profession: ${profile.profession}</p>
                    <p>Location: ${profile.job_location}</p>
                    <button class="connect-btn" onclick="connectWithProfile('${profile.name}')">Connect</button>
                </div>
            `;
            profilesContainer.appendChild(profileCard);
        });
    };

    // Function to handle connecting with a profile (placeholder)
    window.connectWithProfile = function (name) {
        alert(`Connecting with ${name}!`);
        // Add logic to initiate a connection (e.g., open a chat, send a request, etc.)
    };

    // Initial load: Display all profiles
    searchProfiles();
});