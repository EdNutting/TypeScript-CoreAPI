/// <reference path="coreapi.d.ts" />

namespace op_coreapi {
    export function getAuthenticatedClient(): Client {
        if (!window.csrftoken) {
            throw "CSRF Token not defined. Cannot create authenticated API client. Did you forget to include the relevant snippet in the page?");
            /* 
            {% csrf_token %}
            <script>window.csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();</script> 
            */
        }

        var auth: SessionAuthentication = auth || new window.coreapi.auth.SessionAuthentication({
            cookieString: 'csrfToken=' + window.csrftoken,
            csrfCookieName: 'csrfToken',
            csrfHeaderName: 'X-CSRFToken'
        });
        var client: Client = client || new window.coreapi.Client({ auth: auth });
        return client;
    }
}