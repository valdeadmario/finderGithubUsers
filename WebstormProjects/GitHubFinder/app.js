const github = new Github();
const ui = new UI();

const userName = document.getElementById('searchUser');

userName.addEventListener('keyup', e => {
    const userText = e.target.value;
    if (userText !== '') {
        github.getProfile(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // show alert
                    ui.showAlert(data.profile.message, 'alert alert-danger');
                }else {
                    //show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    }else {
        //clear UI profile
        ui.clearProfile();
    }
})