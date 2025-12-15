🛒 Istio Canary Deployment – E-commerce Application
---
📌 Project Overview
---
This project demonstrates an industry-grade Canary Deployment strategy using Kubernetes (Kind) and Istio Service Mesh, without using any cloud provider (AWS/GCP/Azure).
The goal is to show how traffic can be gradually shifted between application versions while ensuring zero downtime.

---
🧰 Tech Stack
---
•Kubernetes (Kind)
•Istio Service Mesh
•Docker
•Node.js
•Git & GitHub
•Linux (Kali)

---
📁 Step 1: Create Project Directory
---
```bash
mkdir canary-app
cd canary-app
```
---
📁 Step 2: Create Application Folders
---
```bash
mkdir app-v1 app-v2 k8s
```

---
📁 Step 3: Create Files
---
app-v1
---
```bah
touch app-v1/Dockerfile
touch app-v1/index.js
touch app-v1/package.json
```
app-v2
---
```bash
touch app-v2/Dockerfile
touch app-v2/index.js
touch app-v2/package.json
```
k8s
---
```bash
touch k8s/deployment-v1.yaml
touch k8s/deployment-v2.yaml
touch k8s/service.yaml
touch k8s/gateway.yaml
touch k8s/destinationrule.yaml
touch k8s/virtualservice.yaml
```
----

🐳 Step 4: Build Docker Images
---
```bash
docker build -t canary-app:v1 ./app-v1
docker build -t canary-app:v2 ./app-v2
```
<img width="804" height="110" alt="Docker Images Built" src="https://github.com/user-attachments/assets/29ebb677-2e88-479c-ba4f-62f9a617e6d5" />

---

☸️ Step 5: Create Kubernetes Cluster (Kind)
---
```bash
kind create cluster --name istio-project
```

```bash
kind get nodes
```
<img width="669" height="91" alt="Node" src="https://github.com/user-attachments/assets/90cdde9a-f529-4b50-b08f-547ee1d1f653" />


---
🧵 Step 6: Install Istio
---
```bash
istioctl install --set profile=demo -y
```
```bash
kubectl get pods -n istio-system
```

----

🏷️ Step 7: Create Namespace & Enable Injection
---
```bash
kubectl create namespace canary-app
kubectl label namespace canary-app istio-injection=enabled
```
---
🚀 Step 8: Deploy Application to Kubernetes
---
```bash
kubectl apply -f k8s/
kubectl get pods -n canary-app
```
<img width="679" height="131" alt="k8s pods" src="https://github.com/user-attachments/assets/c0dca2d7-405a-422d-b6d8-d6b6ae08d415" />

---

🌐 Step 9: Configure Istio Traffic Routing
---
•Gateway configured
•DestinationRule created
•VirtualService configured for 50/50 traffic split
```bash
kubectl get virtualservice -n canary-app
kubectl get destinationrule -n canary-app
```
<img width="557" height="384" alt="VirtualService YAML 50 50 Split" src="https://github.com/user-attachments/assets/bf867dd0-19fd-4c0b-95e4-a7d816d3b6fb" />

---
🔁 Step 10: Access Application
---
```bash
kubectl port-forward -n istio-system svc/istio-ingressgateway 8086:80
```
Open browser:
---
```bash
http://localhost:8086
```
<img width="978" height="470" alt="E-commerce App - v1" src="https://github.com/user-attachments/assets/71f21242-8056-4941-90ae-9a0894b2fc45" />

---
<img width="1318" height="584" alt="E-commerce App - v2" src="https://github.com/user-attachments/assets/85626b2a-18f0-4169-b11a-144e7b378b20" />

---

📊 Step 11: Verify Traffic Distribution
---
```bash
kubectl logs -n canary-app -l version=v1
```
<img width="558" height="119" alt="Logs Showing Traffic Split appv1" src="https://github.com/user-attachments/assets/1bdad78b-25a0-4a49-b612-6df12933c1a6" />

```bash
kubectl logs -n canary-app -l version=v2
```
<img width="567" height="107" alt="Logs Showing Traffic Split appv2" src="https://github.com/user-attachments/assets/ccc64111-d0d9-48e6-b03c-08fd6bf754ff" />

---
📂 Final Project Structure
---
<img width="432" height="342" alt="Project Structure" src="https://github.com/user-attachments/assets/bff69bd1-417a-487e-a2da-6f95ea2c2e82" />

---
✅ Project Status
---
•Canary deployment configured
•Traffic split verified
•Istio routing working
•Local Kubernetes cluster used
•Project completed successfully

---
🏢 Industry Relevance
---
This deployment strategy is used by companies like:
•Netflix
•Google
•Uber
•Amazon
•Spotify
Canary deployments are a core DevOps & SRE practice.

---
🎯 Key Learnings
---

•Istio traffic routing fundamentals
•Canary vs Blue-Green deployment
•Service mesh observability concepts
•Realistic failure handling
•Kubernetes production workflows

---
