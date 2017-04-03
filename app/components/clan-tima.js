import Ember from 'ember';

export default Ember.Component.extend({
    actions : {
        toggleProjekti(id) {
            var selektor = "#clan-projekti-"+id; 
            if(Ember.$(selektor).hasClass("active")){
                Ember.$(selektor).removeClass("active");
                Ember.$(selektor).fadeOut();     
            } else {
                Ember.$(selektor).addClass("active");
                Ember.$(selektor).fadeIn(); 
            }
        }
    }
});
