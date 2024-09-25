const getStoredBookApplication = () => {
    const storedBookApplication = localStorage.getItem('Book_id');
    if(storedBookApplication){
        return JSON.parse(storedBookApplication);
    }
    return [];
}

const saveStoredBookApplication= id => {
    const storedBookApplications = getStoredBookApplication();
    const exists = storedBookApplications.find(jobId => jobId === id);
    if(!exists){
        storedBookApplications.push(id);
        localStorage.setItem('Book_id', JSON.stringify(storedBookApplications))
    }
}
export {saveStoredBookApplication, getStoredBookApplication}