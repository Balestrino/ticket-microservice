next to view: 14.9

### Installation

#### Start minikube

`minikube start --driver=docker`

#### Enable ingress

`minikube addons enable ingress`

`skaffold dev --port-forward`

`kubectl get services`
`kubectl get po`

> create a secret

`kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf`

> Verify that NGINX Ingress controller is running

`kubectl get pods -n kube-system`

> Check Ingress

`kubectl describe ingress ingress-service`

> open a shell in a pod to check stuff (version, etc)

`kubectl exec -it <name of the pod> sh`

Docker images

`docker build -t balestrino/client .`

- [ ] id code presentable?
- [ ] test completion

sudo nohup socat TCP-LISTEN:80,fork TCP:192.168.49.2:80

