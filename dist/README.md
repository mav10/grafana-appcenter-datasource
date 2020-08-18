grafana-appcenter-datasource

---

# How to install plugin

1. Clone this repo
2. Navigate to repo's folder
3. Run 'Grafana' container (how to do it [see docs](https://grafana.com/docs/grafana/latest/installation/docker/ 'Grafana Docker installation'))
4. create folder for plugin in Grafana's container

   ```bash
   sudo docker exec -it <GRAFANA> bash
   cd /var/lib/garafana/plugins/
   mkdir appcenter-ds
   ```

   _Where <**GRAFANA**> your grafana's container name or ID and **appcenter-ds** plugin's folder - you could name it as you wish._

5. Navigate to _~/repository_dir/dist_
6. Run docker command for putting plugin's sources into grafana-docker container

   ```bash
   sudo docker cp ./ <GRAFANA>:/var/lib/grafana/plugins/appcenter-ds
   ```

   _Where <**GRAFANA**> your grafana's container name or ID and **appcenter-ds** plugin's folder from step 4._

7. Restart grafana's container via command:

   ```bash
   sudo docker restart <GRAFANA>
   ```

   _Where <**GRAFANA**> your grafana's container name or ID_

8. Configure Datasource in grafana:

   8.1 Go to settings -> datasources

   ![Configure datasource](https://raw.githubusercontent.com/mav10/grafana-appcenter-datasource/master/src/img/conf-ds.png)

   8.2 Generate API token in Appcenter with **FULL Access**

   _Account settings -> API tokens -> NEW API token_
   ![Generate token](https://raw.githubusercontent.com/mav10/grafana-appcenter-datasource/master/src/img/token.png)

   8.3 Fill appcenter URl and API-token in plugin settings

   ![Configure datasource options](https://raw.githubusercontent.com/mav10/grafana-appcenter-datasource/master/src/img/datasource.png)

9. Create panel with new datasource

   9.1 Select target application from list (1st column)

   9.2 Fill target (monitored) branch (master by default)

   9.3 Choose metric type (builds or test runs)

   9.4 And select Target field (status, ID, Version, Last build time, Application Name)

   ![Configure datasource query](https://raw.githubusercontent.com/mav10/grafana-appcenter-datasource/master/src/img/query-config.png)

As result you could configure something like that:

![Panel](https://raw.githubusercontent.com/mav10/grafana-appcenter-datasource/master/src/img/panel.png)

# Status metrics

| Status              | Value |
| ------------------- | ----- |
| Success             | 100   |
| Success and pending | 65    |
| Pending             | 50    |
| Pending and failed  | 35    |
| Queued              | 25    |
| Failed              | 0     |

# How to make a changes

1. Clone repo
2. Navigate to repo's folder
3. Run command `yarn install` or `npm install`
4. Make some changes in _./src_ folder
5. Run `yarn build` (your code must match the eslint rules - if not - correct)
6. Execute steps 4 - 9 from 'How to install'

---

grafana appcenter microsoft plugin datasource monitor build dashboard
