<template>
  <ActiveSection :section-name="'contacts'">
    <!--
        Conacts Info
      -->
    <div class="content contacts">
      <!-- title -->
      <div class="title">Get in Touch</div>

      <!-- content -->
      <div class="row">
        <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
          
          <div class="info-list">
            <ul>
              <li><strong>Address . . . . .</strong> Quebéc, CANADA</li>
              <li><strong>Email . . . . .</strong> promessejordan12@com</li>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>

    <!--
        Contact Form
      -->
    <div class="content contacts">
      <!-- title -->
      <div class="title">Contact Form</div>

      <!-- content -->
      <div class="row">
        <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div class="contact_form">
            <form id="cform" method="post">
              <div class="row">
                <div class="col col-d-6 col-t-6 col-m-12">
                  <div class="group-val">
                    <input type="text" name="name" placeholder="Full Name" />
                  </div>
                </div>
                <div class="col col-d-6 col-t-6 col-m-12">
                  <div class="group-val">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div class="col col-d-12 col-t-12 col-m-12">
                  <div class="group-val">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="align-left">
                <a href="#" class="button">
                  <span class="text">Send Message</span>
                  <span class="arrow"></span>
                </a>
              </div>
            </form>
            <div class="alert-success">
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </ActiveSection>
</template>
