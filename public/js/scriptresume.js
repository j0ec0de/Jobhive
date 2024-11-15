// script.js
function generateResume() {
    document.getElementById('name').textContent = document.getElementById('name-input').value;
    document.getElementById('contact-info').textContent = document.getElementById('contact-info-input').value;
    document.getElementById('email').textContent = 'Email: ' + document.getElementById('email-input').value;
    document.getElementById('phone').textContent = 'Phone: ' + document.getElementById('phone-input').value;
    document.getElementById('address').textContent = 'Address: ' + document.getElementById('address-input').value;
    document.getElementById('experience').innerHTML = document.getElementById('experience-input').value.replace(/\n/g, '<br>');
    document.getElementById('education').innerHTML = document.getElementById('education-input').value.replace(/\n/g, '<br>');

    const skills = document.getElementById('skills-input').value.split(',');
    const skillsList = document.getElementById('skills');
    skillsList.innerHTML = '';
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
}

function downloadPDF() {
    const resume = document.getElementById('resume');
    const opt = {
        margin: 0,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2, scrollY:0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(resume).set(opt).save();
}
