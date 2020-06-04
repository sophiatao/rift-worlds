var html = `
        <h1 class="centered">Rift Worlds Character Sheet</h1>
        <div class="flex-row">
          <div class='flex-col bordered' style="flex-grow: 1">
            <div class="flex-row padded">
              <div>Name:</div>
              <input type="text">
            </div>
            <div class="flex-row padded">
              <div>Species:</div>
              <input type="text">
            </div>
            <div class="flex-row padded">
              <div>Quirk:</div>
              <input type="text">
            </div>
          </div>
          <div class='flex-col bordered' id='pic' style="flex-grow: 8">
            <input type="file"  accept="image/*" name="image" id="file"  onchange="getImagePreview(event)" style="display:none;">
            <label for="file" style="cursor: pointer;">Upload Image</label>
            <img id="sheetPicture" width="200"/>
          </div>
        </div>
        <div class="flex-row">
          <div class='flex-col bordered'>
            <div>Backstory:</div>
            <br>
            <textarea type="text" rows='3' style="resize: none"></textarea>
          </div>
        </div>
        <div class="flex-row">
          <div class='flex-col bordered' style="flex-grow: 1">
            <div class="flex-row emphasis padded">Ability scores</div>
            <div class="flex-row">
              <div class="flex-col">
                <div>Strength:</div>
                <input type="number">
              </div>
              <div class="flex-col">
                <div>Dexterity:</div>
                <input type="number">
              </div>
            </div>
            <div class="flex-row">
              <div class="flex-col">
                <div>Agility:</div>
                <input type="number">
              </div>
              <div class="flex-col">
                <div>Charm:</div>
                <input type="number">
              </div>
            </div>
          </div>
          <div class='flex-col bordered' id='pic' style="flex-grow: 8">
            <div class="flex-row emphasis padded">Features</div>
            <div class="flex-row padded">
              <div>Health:</div>
              <input type="number">
            </div>
            <div class="flex-row padded">
              <div>Energy:</div>
              <input type="number">
            </div>
          </div>
        </div>
        <div class="flex-row">
          <div class='flex-col bordered'>
            <div>Specialties & Masteries:</div>
            <textarea type="text" rows='3' style="resize: none"></textarea>
          </div>
        </div>
        <div class="flex-row">
          <div class='flex-col bordered' style="flex-grow: 1">
            <div>Gadgets:</div>
            <textarea type="text" rows='5' style="resize: none"></textarea>
          </div>
          <div class='flex-col bordered' style="flex-grow: 1">
            <div>Powers:</div>
            <textarea type="text" rows='5' style="resize: none"></textarea>
          </div>
        </div>
        <br>
        <div class="hoverLink nav centered emphasis" onclick="genSheet(this)">➤ Save</div>
        <div class="hoverLink nav centered emphasis" id="return_nav">➤ Return</div>
`

$(document).ready(function () {
  $('#character_container').append(html);
  $(".nav").click(getPage);
});

function getImagePreview(event) {
  var image = document.getElementById('sheetPicture');
  image.src = URL.createObjectURL(event.target.files[0]);
};

function genSheet(el) {
 console.log($("#character_container"))
  html2canvas(document.querySelector("#character_container"), { letterRendering: 1, allowTaint : true}).then(canvas => {
    var image = canvas.toDataURL();
    var newTab = window.open();
    newTab.document.body.innerHTML = '<img src="'+image+'">';
  });
}
