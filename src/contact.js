export { getContact };

function getContact() {
  const mainInfo = document.querySelector('.mainInfo');
  const header = document.createElement('h1');
  header.innerHTML = '~Contact~';
  mainInfo.append(header);
  const contactInfo = document.createElement('div');
  contactInfo.setAttribute('id', 'contactInfo');
  contactInfo.innerHTML =
    '<h2>John Doe</h2><h3>Pit Master</h3><p>Phone: 888-888-888</p><p>E-mail: example@email.net</p><br><br><h2>Jane Doe</h2><h3>Manager</h3><p>Phone: 888-888-889</p><p>E-mail: fakemanager@email.net</p>';
  mainInfo.append(contactInfo);
}
