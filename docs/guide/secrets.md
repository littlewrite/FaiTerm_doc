# Secrets

The Secrets tool manages reusable passwords, private keys, and key passphrases. Store a value once and reference it from multiple hosts instead of duplicating credentials.

## Why use secrets

A host can contain its own password or key, or reference a saved secret. Shared jump-host accounts, private keys, and passphrases are easier to maintain when every host points to one entry.

## Create a secret

Open **Secrets** from the tool rail and choose **Add**:

| Section | Contents |
| --- | --- |
| Basic information | A name and optional notes describing where it is used. |
| Credential | Password, private key, or private-key passphrase. |

Select the saved secret under **Linked secret** in a host editor.

## Encrypted local storage

Under **Settings → General**, set a local data password to encrypt connection credentials and keys stored on disk:

- Clearing the password disables encryption and stores data as plain text.
- Restart the app after changing the password so every component uses the new value.
- A lost password cannot be recovered.

**Delete all data** permanently removes settings, hosts, secrets, history, and other application data. This action cannot be undone.

## Related

- [Connections and Hosts](/guide/ssh)
- [Account and Sync](/guide/sync)
