// const register = () => {
//     console.log(5*5);
// } 
// register(   );

document.getElementById("Title").innerHTML="Registration Form";

const show=(event)=>
{
    // Prevent the default form submission so the console logs can be seen
    if (event) {
        event.preventDefault();
    }

    const name=document.getElementById("Name").value;
    const email=document.getElementById("Email").value;
    const password=document.getElementById("Password").value;
    const phone=document.getElementById("Phone").value;
    
    // Fix: Use querySelector to find the checked radio button
    const genderEl = document.querySelector('input[name="gender"]:checked');
    const gender = genderEl ? genderEl.value : "";

    // Fix: Select all checked qualification checkboxes and collect their values in an array
    const qualificationCheckboxes = document.querySelectorAll('input[name="qualification"]:checked');
    const qualification = Array.from(qualificationCheckboxes).map(cb => cb.value);
    
    const country=document.getElementById("Country").value;
    const dateofbirth=document.getElementById("Dateofbirth").value;
    
    const imageInput = document.getElementById("Image");
    const imageFile = imageInput.files[0];
    const imageUrl = imageFile ? URL.createObjectURL(imageFile) : "";

    const result=document.getElementById("Result").innerHTML=
`
<h1>Results</h1>
<h3>Name : ${name}</h3>
<h3>Email : ${email}</h3>
<h3>Password : ${password}</h3>
<h3>Phone : ${phone}</h3>
<h3>Gender : ${gender}</h3>
<h3>Qualification : ${qualification}</h3>
<h3>Country : ${country}</h3>
<h3>Date of birth : ${dateofbirth}</h3>
<h3>Image :</h3>
${imageUrl ? `<img src="${imageUrl}" alt="Uploaded Image" style="max-width: 300px; border-radius: 8px; margin-top: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">` : 'No image selected'}
`

}