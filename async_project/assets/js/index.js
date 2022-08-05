fetch ("https://randomuser.me/api/?results=5&gender=male").then(loadResolve).then(logData).catch(loadReject);

function loadResolve(response){
    return response.json();
};

function logData(data){
    console.log(data);
};

function loadReject(reject){
    console.log(reject);
};