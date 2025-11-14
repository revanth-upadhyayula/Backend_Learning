// function openEditDialog() {
//     alert("Edit Profile Dialog Opened");
//   }
  
//   // Tab switching functionality
//   const tabContents = document.querySelectorAll('.tab-content');
//   const tabs = document.querySelectorAll('.profile-tabs .tab');
  
//   tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//       const target = tab.getAttribute('data-target');
//       tabContents.forEach(content => {
//         content.classList.remove('active');
//         if (content.id === target) {
//           content.classList.add('active');
//         }
//       });
//     });
//   });/

const edit=document.getElementById('edit');


document.addEventListener("DOMContentLoaded",function(){
    const main = document.getElementById('main-photo');
    const thumbnails=document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail=>{
        thumbnail.addEventListener('click',()=>{
            main.src=thumbnail.src;
        })
    })
})

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(t => t.classList.remove("active")); 
            contents.forEach(content => content.classList.remove("active"));

            this.classList.add("active"); 
            const contentId = this.getAttribute("data-tab");
            document.getElementById(contentId).classList.add("active");
        });
    });
});

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Tab Functionality
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling to parent elements
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
        });
    });

    // Modal Functionality
    const editButton = document.getElementById('edit');
    const modal = document.getElementById('edit-modal');
    const cancelButton = document.getElementById('cancel-btn');
    const editForm = document.getElementById('edit-profile-form');

    // Debugging: Check if elements are found
    console.log('Edit Button:', editButton);
    console.log('Modal:', modal);
    console.log('Cancel Button:', cancelButton);
    console.log('Edit Form:', editForm);

    if (!editButton) {
        console.error('Edit button not found in the DOM');
        return;
    }

    if (!modal) {
        console.error('Modal not found in the DOM');
        return;
    }

    editButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the click event from bubbling up to parent elements
        console.log('Edit button clicked');
        modal.style.display = 'flex'; // Show the modal
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            console.log('Clicked outside modal');
            modal.style.display = 'none';
        }
    });

    // Add Photo Functionality
    const photoUpload = document.getElementById('photo-upload');
    const photoPreview = document.getElementById('photo-preview');

    if (photoUpload && photoPreview) {
        photoUpload.addEventListener('change', (e) => {
            console.log('Photo upload triggered');
            const files = e.target.files;
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        const img = document.createElement('img');
                        img.src = event.target.result;
                        img.className = 'modal-photo';
                        photoPreview.insertBefore(img, photoPreview.lastElementChild);
                    };
                    reader.readAsDataURL(file);
                }
            }
        });
    } else {
        console.error('Photo upload or preview elements not found');
    }

    // Tag Management
    function addTag(inputId, targetId) {
        const input = document.getElementById(inputId);
        const target = document.getElementById(targetId);
        const value = input.value.trim();

        if (value) {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.innerHTML = `${value} <button type="button" class="remove-tag">×</button>`;
            target.appendChild(tag);
            input.value = '';

            tag.querySelector('.remove-tag').addEventListener('click', () => {
                tag.remove();
            });
        }
    }

    document.querySelectorAll('.add-tag-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Add tag button clicked');
            const targetId = btn.getAttribute('data-target');
            const inputId = `${targetId}-input`;
            addTag(inputId, targetId);
        });
    });

    document.querySelectorAll('.remove-tag').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Remove tag button clicked');
            btn.parentElement.remove();
        });
    });

    // Handle Form Submission
    if (editForm) {
        editForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Form submitted');

            try {
                // Update Personal Information
                const fullName = document.getElementById('full-name').value;
                const age = document.getElementById('age').value;
                const dob = document.getElementById('dob').value;
                const currentLocation = document.getElementById('current-location').value;
                const hometown = document.getElementById('hometown').value;

                document.querySelector('.profile-header h2').innerHTML = `${fullName}, ${age}<ion-icon name="checkmark-circle-outline" class="verified"></ion-icon>`;
                document.querySelector('.location').innerHTML = `<ion-icon name="location-outline" class="loc"></ion-icon> ${currentLocation}`;
                document.querySelector('#dob .sub-down').textContent = dob;
                document.querySelector('#location .sub-down').textContent = hometown;

                // Update Career & Education
                const profession = document.getElementById('profession').value;
                const company = document.getElementById('company').value;
                const highestDegree = document.getElementById('highest-degree').value;
                const university = document.getElementById('university').value;

                document.querySelector('#job .sub-down').textContent = `${profession} at ${company}`;
                document.querySelector('#eduaction .sub-down').textContent = `${highestDegree}, ${university}`;
                document.querySelector('#education .personal-info .sub-down').textContent = highestDegree;
                const universityElement = document.querySelector('#education .personal-info p:nth-child(2) .sub-down');
                if (universityElement) universityElement.textContent = university;
                document.querySelector('#education .more-info .sub-down').textContent = `${profession} at ${company}`;

                // Update About Me
                const about = document.getElementById('about').value;
                document.querySelector('#about p').textContent = about;

                // Update Languages
                const languages = Array.from(document.querySelectorAll('#languages .tag')).map(tag => tag.textContent.replace('×', '').trim());
                document.querySelector('#language .sub-down').textContent = languages.join(', ');

                // Update Interests
                const interests = Array.from(document.querySelectorAll('#interests .tag')).map(tag => tag.textContent.replace('×', '').trim());
                const interestTags = document.querySelector('#interest-tags');
                interestTags.innerHTML = interests.map(interest => `<span>${interest}</span>`).join('');

                // Update Family Information
                const familyType = document.getElementById('family-type').value;
                const siblings = document.getElementById('siblings').value;
                const fatherOccupation = document.getElementById('father-occupation').value;
                const motherOccupation = document.getElementById('mother-occupation').value;
                const familyValues = document.getElementById('family-values').value;
                const familyLocation = document.getElementById('family-location').value;
                const familyBackground = document.getElementById('family-background').value;

                document.querySelector('#family-type .sub-down').textContent = familyType;
                document.querySelector('#siblings .sub-down').textContent = siblings;
                document.querySelector('#father-occupation .sub-down').textContent = fatherOccupation;
                document.querySelector('#mother-occupation .sub-down').textContent = motherOccupation;
                document.querySelector('#values .sub-down').textContent = familyValues;
                const familyLocationElement = document.querySelector('#family .more-info .sub-down');
                if (familyLocationElement) familyLocationElement.textContent = familyLocation;
                document.querySelector('#family p').textContent = familyBackground;

                // Update Partner Preferences
                const prefAgeRange = document.getElementById('pref-age-range').value;
                const prefHeightRange = document.getElementById('pref-height-range').value;
                const prefEducation = Array.from(document.querySelectorAll('#pref-education .tag')).map(tag => tag.textContent.replace('×', '').trim());
                const prefOccupation = Array.from(document.querySelectorAll('#pref-occupation .tag')).map(tag => tag.textContent.replace('×', '').trim());
                const prefLocations = Array.from(document.querySelectorAll('#pref-locations .tag')).map(tag => tag.textContent.replace('×', '').trim());
                const prefMaritalStatus = Array.from(document.querySelectorAll('#pref-marital-status .tag')).map(tag => tag.textContent.replace('×', '').trim());
                const partnerPreferences = document.getElementById('partner-preferences').value;

                document.querySelector('#preferences .personal-info .sub-down').textContent = prefAgeRange;
                const prefHeightElement = document.querySelector('#preferences .personal-info p:nth-child(2) .sub-down');
                if (prefHeightElement) prefHeightElement.textContent = prefHeightRange;
                document.querySelector('#preferences .more-info .sub-down').textContent = prefEducation.join(', ');
                document.querySelector('#preferences .more-info .sub-down:nth-child(2)').textContent = prefOccupation.join(', ');
                document.querySelector('#preferences .more-info .sub-down:nth-child(3)').textContent = prefMaritalStatus.join(', ');
                document.querySelector('#preferences p').textContent = partnerPreferences;

                // Update Profile Tags
                const profileTags = document.querySelector('.profile-tags');
                profileTags.innerHTML = `
                    <span>${profession}</span>
                    <span>5'10"</span>
                    <span>Never Married</span>
                    <span>Hindu</span>
                `;

                // Close the modal
                console.log('Closing modal after save');
                modal.style.display = 'none';

                // Ensure the correct tab content is displayed
                const activeTab = document.querySelector('.tab.active');
                if (activeTab) {
                    const activeTabId = activeTab.getAttribute('data-tab');
                    document.getElementById(activeTabId).classList.add('active');
                }
            } catch (error) {
                console.error('Error during form submission:', error);
                // Ensure modal closes even if there's an error
                modal.style.display = 'none';
            }
        });
    } else {
        console.error('Edit form not found in the DOM');
    }
});
