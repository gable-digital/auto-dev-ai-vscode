import * as vscode from 'vscode';
import * as axios from 'axios'; // Make sure to install this package

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.autoDev', async () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        const result = await vscode.window.showInputBox({
            prompt: "Please enter your query"
        });

        if (result !== undefined) {
            try {
                // Call the REST API
                const response = await axios.default.post('https://your-api.com/endpoint', {
                    data: result
                });

                if (response.status === 200) {
                    vscode.window.showInformationMessage('Data sent successfully!');
                } else {
                    vscode.window.showErrorMessage('Error sending data.');
                }
            } catch (error) {
                vscode.window.showErrorMessage(`Error: ${error}`);
            }
        }
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

