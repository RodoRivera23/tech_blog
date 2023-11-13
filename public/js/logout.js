const logoutHandler = async () => {
    try {
        const response = await fetch('/api/users/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            throw new Error('Failed to log out. Please try again.');
        }
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
};

const logoutButton = document.querySelector('#hearthstone-logout');
if (logoutButton) {
    logoutButton.addEventListener('click', logoutHandler);
}
