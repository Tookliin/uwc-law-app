<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="card my-5">
          <div class="cart-body">
            <picture-input
              @change="onChange"
              accept="image/jpeg, image/png"
              size="5"
              buttonClass="btn btn-danger"
            ></picture-input>
            <input type="text" placeholder="Title" class="form-control mb-3" />
            <wysiwyg v-model="content" />
            <div class="text-center">
              <button @click="createArticle()" class="btn-success mt-3 btn btn-lg">Create Article</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import PictureInput from "vue-picture-input";
export default {
  components: {
    PictureInput
  },
  data() {
    return {
      content: "",
      image: null
    };
  },
  methods: {
    onChange(image) {
      this.image = image;
    },
    createArticle() {
      const form = new FormData();
      form.append("file", this.image);
      form.append("upload_preset", "ovostotd");
      form.append("api_key", "874654228916193");

      Axios.post(
        "https://api.cloudinary.com/v1_1/change/image/upload",
        form
      ).then(response => {
        console.warn(response);
      });
    }
  }
};
</script>