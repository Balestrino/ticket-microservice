minikube start
skaffold dev --port-forward

- Verify that NGINX Ingress controller is running
  kubectl get pods -n kube-system

- Check Ingress
  kubectl describe ingress ingress-service