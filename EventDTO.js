//EventDTO.js

class EventDTO {
  data = JSON.parse(localStorage.getItem("categories"));
  constructor(formData, organiserId, selectedCategory) {
    this.formData = formData;
    this.organiserId = organiserId;
    this.selectedCategory = JSON.parse(localStorage.getItem("categories"))[0].catId;
  }
}

export default EventDTO;
