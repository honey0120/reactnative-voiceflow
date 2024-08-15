//Hide this in .env file eventually
const API_KEY = 'VF.DM.66634ed7d088ba19d581810a.TPh4Uug2EAkIxZ4B';

const vfInteract = async (user, userAction) => {
  const interractionUrl = `https://general-runtime.voiceflow.com/state/user/${user}/interact`;

  const payload = {
    action: userAction,
  };

  const data = await fetch(interractionUrl, {
    headers: {
      'Authorization': API_KEY,
      'accept': 'application/json',
      'content-type': 'application/json',
      'versionID': 'production',
    },
    method: 'POST',
    body: JSON.stringify(payload),
  });

  const postRes = await data.json();
  return postRes;
};

const vfUpdateVariables = async (user, variables) => {
  const updateVariablesUrl = `https://general-runtime.voiceflow.com/state/user/${user}/variables`;

  const data = await fetch(updateVariablesUrl, {
    headers: {
      'Authorization': API_KEY,
      'accept': 'application/json',
      'content-type': 'application/json',
      'versionID': 'production',
    },
    method: 'PATCH',
    body: JSON.stringify(variables),
  });

  if (!data.ok) {
    console.error('Failed to update variables', data);
  }

  const postRes = await data.json();
  return postRes;
};

export {vfInteract, vfUpdateVariables};