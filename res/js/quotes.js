
/**
* Quotes: WeberStudio.Net
**/
(function(ref){
  var quotes = {
    quotes: [{"id":"1","group_id":"1","text":"The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.","author_id":"1","location":null,"date":null},{"id":"2","group_id":"1","text":"Never memorize something that you can look up.","author_id":"2","location":null,"date":null},{"id":"3","group_id":"1","text":"Science without religion is lame, religion without science is blind.","author_id":"2","location":null,"date":null},{"id":"4","group_id":"1","text":"If we knew what it was we were doing, it would not be called research, would it?","author_id":"2","location":null,"date":null},{"id":"5","group_id":"1","text":"One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don't throw it away.","author_id":"3","location":null,"date":null},{"id":"6","group_id":"1","text":"Somewhere, something incredible is waiting to be known.","author_id":"4","location":null,"date":null},{"id":"7","group_id":"1","text":"The important thing is not to stop questioning. Curiosity has its own reason for existence. One cannot help but be in awe when he contemplates the mysteries of eternity, of life, of the marvelous structure of reality. It is enough if one tries merely to comprehend a little of this mystery each day.","author_id":"2","location":"\"Old Man's Advice to Youth: 'Never Lose a Holy Curiosity.'\" LIFE Magazine (2 May 1955) p. 64","date":null},{"id":"8","group_id":"1","text":"The fact that we live at the bottom of a deep gravity well, on the surface of a gas covered planet going around a nuclear fireball 90 million miles away and think this to be normal is obviously some indication of how skewed our perspective tends to be.","author_id":"5","location":"The Salmon of Doubt: Hitchhiking the Galaxy One Last Time","date":null},{"id":"9","group_id":"1","text":"The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.","author_id":"2","location":"The World As I See It","date":null},{"id":"10","group_id":"1","text":"We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special.","author_id":"3","location":null,"date":null},{"id":"11","group_id":"1","text":"I'm sure the universe is full of intelligent life. It's just been too intelligent to come here.","author_id":"6","location":null,"date":null},{"id":"12","group_id":"1","text":"An expert is a person who has made all the mistakes that can be made in a very narrow field.","author_id":"7","location":null,"date":null},{"id":"13","group_id":"1","text":"Science and religion are not at odds. Science is simply too young to understand.","author_id":"8","location":"Angels & Demons","date":null},{"id":"14","group_id":"1","text":"Heard melodies are sweet, but those unheard, are sweeter","author_id":"9","location":"Ode on a Grecian Urn and Other Poems","date":null},{"id":"15","group_id":"1","text":"Everything must be made as simple as possible. But not simpler.","author_id":"2","location":null,"date":null},{"id":"16","group_id":"1","text":"A man who dares to waste one hour of time has not discovered the value of life.","author_id":"10","location":"The Life & Letters of Charles Darwin","date":null},{"id":"17","group_id":"2","text":"The fool doth think he is wise, but the wise man knows himself to be a fool.","author_id":"11","location":"As You Like It","date":null},{"id":"18","group_id":"2","text":"Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).","author_id":"12","location":null,"date":null},{"id":"19","group_id":"2","text":"Any fool can know. The point is to understand.","author_id":"2","location":null,"date":null},{"id":"20","group_id":"2","text":"Never let your sense of morals prevent you from doing what is right.","author_id":"1","location":"Foundation","date":null}],
    authors: [{"id":"1","first_name":"Isaac","middle_name":"","last_name":"Asimov"},{"id":"2","first_name":"Albert","middle_name":"","last_name":"Einstein"},{"id":"3","first_name":"Stephen","middle_name":"","last_name":"Hawkings"},{"id":"4","first_name":"Carl","middle_name":"","last_name":"Sagan"},{"id":"5","first_name":"Douglas","middle_name":"","last_name":"Adams"},{"id":"6","first_name":"Arthur","middle_name":"C.","last_name":"Clarke"},{"id":"7","first_name":"Niels","middle_name":"","last_name":"Bohr"},{"id":"8","first_name":"Dan","middle_name":"","last_name":"Brown"},{"id":"9","first_name":"John","middle_name":"","last_name":"Keats"},{"id":"10","first_name":"Charles","middle_name":"","last_name":"Darwin"},{"id":"11","first_name":"William","middle_name":"","last_name":"Shakespeare"},{"id":"12","first_name":"Mark","middle_name":"","last_name":"Twain"},{"id":"13","first_name":"Confucius","middle_name":"","last_name":""}],
    categories: [{"id":"1","group":"Science"},{"id":"2","group":"Wisdom"}],
    current: {
        quote: "",
        location: "",
        author: "",
        category: ""
    },
    load: function() {
      var self = this,
          ran = self.getRandom(self.quotes.length);
      self.setCurrent(ran);
      window.addEventListener("load", function(){
        //TODO stricter search policy
        var rosette =[
          {name: "quote", value: quotes.current.quote},
          {name: "venue", value: quotes.current.location},
          {name: "author", value: quotes.current.author}
        ];
        rosette.forEach(function(val,idx,ary){
          // document.getElementsByClassName('venue');
          console.log(idx);
          console.log(val);
          console.log(ary);
        })
        // $('span.quote').text(quotes.current.quote);
        // $('span.venue').text(quotes.current.location);
        // $('span.author').text(quotes.current.author);
      });
    },
    getRandom: function(max){
      return Math.floor(Math.random() * max);
    },
    /**
     * Set this objects, current quote given the index of the quote
     */
    setCurrent: function(id){
      var self = this;
      self.current.quote = self.quotes[id].text;
      var cursor = self.quotes[id].author_id - 1;
      var author =  self.authors[cursor];
      self.current.author = author.first_name;
      self.current.author += (author.middle_name !== null || author.middle_name != '')?' ' + author.middle_name + ' ':' '; 
      self.current.author += author.last_name;
      self.current.location = (self.quotes[id].location !== null)?self.quotes[id].location:'';
      cursor = self.quotes[id].group_id - 1;
      self.current.category = self.categories[cursor].group;
    },
    renderCurrent: function(id) {
      var self = this;
    }
  };

  if(window.quotes == undefined) {
    window.quotes = quotes;
  };
  quotes.load();
})(window.quotes || {});

