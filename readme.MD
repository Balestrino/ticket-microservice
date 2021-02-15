### Structure

### Installation

`minikube start --driver=docker`

`minikube addons enable ingress`

`kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf`

`kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=sk_test_5NCm7qyJtkdvu0PuMy4ZSn5o00M5WuISwp`

`sudo nohup socat TCP-LISTEN:80,fork TCP:192.168.49.2:80`

`skaffold dev`

`kubectl port-forward service/nats-srv 4222:4222`
`kubectl port-forward nats-depl-xxxxxxxxx 4222:4222`
`kubectl port-forward nats-depl-xxxxxxxxx 8222:8222`

#### Notes

`kubectl get services`
`kubectl get po`

> create a secret

`kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf`

> Verify that NGINX Ingress controller is running

`kubectl get pods -n kube-system`

> Check a service

`kubectl describe service <servicename>`
`kubectl describe ingress ingress-service`
`kubectl get svc --all-namespaces`

> Restart a deployment

`kubectl get deployment`
`kubectl rollout restart deployment <depl_name>`

> Check logs of a pod

`kubectl logs -f <podname>`

> open a shell in a pod to check stuff (version, etc)

`kubectl exec -it <name of the pod> sh`

> Docker images

`docker build -t balestrino/client .`

> COMMON MODULE

- npm run pub
- in tickets dir: npm update @gadue/common

NATS

`kubectl port-forward <nats-depl-pod> 4222:4222`

Restart the pod (clear old trash data):
`kubectl delete pod <nats-depl-pod>`

STRIPE

create a secret

`kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=sk_test_xxxxxxxxxxxxxx`
`kubectl get secrets`

> Get inside a pod in a namespace (ex. ingress)

`kubectl exec -it -n <namespace> <pod> `nginx -s reload`

> Access mongoDB with Compass

`kubectl port-forward service/auth-mongo-srv 27017:27017`
`sudo socat TCP4-LISTEN:27018, fork TCP:127.0.0.1:27017`

`minikube ssh`

> Persistent MongoDB with NFS

`kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'`

`/etc/exports

/data/auth-mongo \*(rw,sync,no_subtree_check,no_root_squash)`

sudo systemctl restart nfs-kernel-server
