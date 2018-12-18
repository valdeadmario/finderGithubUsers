const github = new Github();
const ui = new UI();

const userName = document.getElementById('searchUser');

userName.addEventListener('keyup', e => {
    userText = e.target.value;
    if (userText !== '') {
        github.getProfile(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // show alert
                }else {
                    //show profile
                    ui.showProfile(data.profile);
                }
            })
    }else {
        //clear UIprofile

    }
})