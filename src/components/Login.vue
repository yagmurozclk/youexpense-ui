<template>
  <div class="login-form col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0" style="height: 100%">
    <div class="">
      <form action="">
        <h2 class="text-center">Sign in</h2>
        <!--      <div class="text-center social-btn">-->
        <!--        <a href="#" class="btn btn-primary btn-block"><i class="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>-->
        <!--        <a href="#" class="btn btn-info btn-block"><i class="fa fa-twitter"></i> Sign in with <b>Twitter</b></a>-->
        <!--        <a href="#" class="btn btn-danger btn-block"><i class="fa fa-google"></i> Sign in with <b>Google</b></a>-->
        <!--      </div>-->
        <!--      <div class="or-seperator"><i>or</i></div>-->
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-user"></i></span>
            <input type="text" class="form-control" name="username" placeholder="Username" required="required"
                   v-model="form.email">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-lock"></i></span>
            <input type="password" class="form-control" name="password" placeholder="Password" required="required"
                   v-model="form.password">
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success btn-block" @click="onSubmit">Sign in</button>
        </div>
        <div class="clearfix">
          <label class="pull-left checkbox-inline"><input type="checkbox" v-model="form.remember"> Remember me</label>
          <a href="#" class="pull-right text-success">Forgot Password?</a>
        </div>

      </form>
      <div class="hint-text small">Don't have an account? <a href="#" class="text-success">Register Now!</a></div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        remember: false,
        response: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      axios
        .post('http://www.mocky.io/v2/5d6aae773100006400d20744', {
          email: this.form.email,
          password: this.form.password
        })
        .then(response => {
          console.log(response)
          this.$router.push({ name: 'Home' })
        })
        .catch(error => {
          console.log('error : ' + error)
        })

      // console.log(this.form.response)
      // alert(JSON.stringify(this.form.response))
    }
  }
}
</script>

<style scoped>
  .login-form {
    width: 340px;
    margin: 30px auto;
  }

  .login-form form {
    margin-bottom: 15px;
    background: #f7f7f7;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 30px;
  }

  .login-form h2 {
    margin: 0 0 15px;
  }

  .login-form .hint-text {
    color: #777;
    padding-bottom: 15px;
    text-align: center;
  }

  .form-control, .btn {
    min-height: 38px;
    border-radius: 2px;
  }

  .login-btn {
    font-size: 15px;
    font-weight: bold;
  }

  .or-seperator {
    margin: 20px 0 10px;
    text-align: center;
    border-top: 1px solid #ccc;
  }

  .or-seperator i {
    padding: 0 10px;
    background: #f7f7f7;
    position: relative;
    top: -11px;
    z-index: 1;
  }

  .social-btn .btn {
    margin: 10px 0;
    font-size: 15px;
    text-align: left;
    line-height: 24px;
  }

  .social-btn .btn i {
    float: left;
    margin: 4px 15px 0 5px;
    min-width: 15px;
  }

  .input-group-addon .fa {
    font-size: 18px;
  }
</style>
