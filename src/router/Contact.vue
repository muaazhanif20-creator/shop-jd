<template>
  <WelcomeSection title="Welcome to my Contact Page" subTitle="fresh deal on Contact Page " :isButtonShow="false"/><br>
<div class="parent-div"> <div class="contact-container"> <div class="contact-info"> <h1>Get in Touch</h1> <p>Have questions about our clothing, size guides, or your recent order? We're here to assist you.</p> <h3>Customer Support</h3> <p>Our support team is ready to help you with quick and friendly responses.</p> <h3>Reach Out Anytime</h3> <p>Whether it's inquiries, feedback, or support—send us a message and we'll get back to you shortly.</p> </div> <div class="contact-form"> <form> <label>Name</label> <input type="text" placeholder="Enter your name" /> <label>Email</label> <input type="email" placeholder="Enter your email" /> <label>Phone Number</label> <input type="text" placeholder="Enter your phone number" /> <label>Message</label> <textarea placeholder="Write your message here..."></textarea> <button type="submit" class="submit-btn">Send Message</button> </form> </div> </div></div>

</template>
<script setup>
    import WelcomeSection from '../components/welcome-section.vue';
</script>
<style scoped>
.parent-div {
  display: flex;
  justify-content: center;
  padding: 20px;
  background: #f2f2f2;
}

/* Main Container */
.contact-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 1000px;
  width: 100%;
  box-shadow: 0 3px 15px rgba(0,0,0,0.1);
}

/* LEFT SIDE INFO */
.contact-info {
  flex: 1;
  min-width: 260px;
}

.contact-info h1 {
  color: #222;
  margin-bottom: 10px;
  font-size: 26px;
}

.contact-info h3 {
  color: #444;
  margin-top: 20px;
  font-size: 18px;
}

.contact-info p {
  color: #666;
  line-height: 1.7;
}

/* FORM RIGHT SIDE */
.contact-form {
  flex: 1;
  min-width: 260px;
}

/* Form Elements */
.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

label {
  font-weight: 600;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 12px 14px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #fafafa;
  transition: .2s;
}

input:focus,
textarea:focus {
  border-color: #000;
  background: white;
  outline: none;
}

/* Button */
.submit-btn {
  margin-top: 10px;
  padding: 12px;
  background: rgb(146, 199, 99);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: .3s;
}

.submit-btn:hover {
  background: rgb(142, 214, 79);
}



</style>