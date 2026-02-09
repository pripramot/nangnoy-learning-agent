---
name: explainable-ai-shap
description: Advanced Explainable AI (XAI) skill using SHAP (SHapley Additive exPlanations). Focuses on deep learning, gradient explainers, and forensic model interpretation.
---

# Explainable AI (SHAP Advanced) Skill

This skill allows "Nangnoy" to explain *why* an AI model made a specific decision, critical for forensic credibility.

## 1. Advanced Explainers

### 🚀 `DeepExplainer` (Deep Learning)

- **Use Case:** Neural Networks (TensorFlow/PyTorch).
- **Mechanism:** Approximates SHAP values for deep learning models using DeepLIFT.
- **Forensic Value:** Explaining image classification (e.g., why an image was flagged as illicit).

### 🌳 `TreeExplainer` (XGBoost/Random Forest)

- **Use Case:** Tabular data (Vehicle reservations, Fraud detection).
- **Mechanism:** Exact SHAP values for tree ensembles.
- **Forensic Value:** Identifying risk factors in user profiles.

### 📈 `GradientExplainer`

- **Use Case:** Models where we can compute gradients (TF/PyTorch/Keras).
- **Mechanism:** Expected gradients.

## 2. Visualization Techniques (The "Evidence")

- **Force Plot:** Visualize the contribution of features for a specific prediction (Individual Case Analysis).

    ```python
    shap.force_plot(explainer.expected_value, shap_values[0], X.iloc[0])
    ```

- **Summary Plot:** Global feature importance (Systemic Bias Check).

    ```python
    shap.summary_plot(shap_values, X)
    ```

- **Dependence Plot:** Interaction between two features.

    ```python
    shap.dependence_plot("Speed", shap_values, X)
    ```

## 3. Forensic Application

1. **Chain of Reasoning:** Every AI output in a report MUST be accompanied by a top-3 feature contribution list.
2. **Bias Check:** Run `summary_plot` on new models to ensure no protected attributes (Age, Gender) are driving decisions illegally.
3. **Anomaly Explanation:** When `Silent Sentry` flags a vehicle, use `force_plot` to show *why* (e.g., "Deviation from route" + "Midnight operation").
