/**
 * CustomerIQ — Customer Retention Intelligence Types
 */

export type RiskLevel = 'HIGH' | 'MEDIUM' | 'LOW';

export type EvidenceStrength = 'Strong' | 'Moderate' | 'Limited';

export interface CustomerInput {
  customerId?: string;
  frequency: number;
  monetary: number;
  recency: number;
  customerLifespan: number;
  avgPurchaseInterval: number;
  medianPurchaseInterval: number;
}

export interface CaseStudy {
  name?: string;
  company?: string;
  case_name?: string;
  relevant_pattern?: string;
  pattern?: string;
  strategy?: string;
  evidence_strength?: EvidenceStrength | string;
  rationale?: string;
  url?: string;
  source?: string;
}

export interface TestRecommendationData {
  recommendation?: string;
  goal?: string;
  metric?: string;
}

export interface CustomerIntelligenceResult {
  customer_id?: string;
  churn_probability: number;
  risk_segment: RiskLevel | string;
  revenue_exposure: number;
  key_behavioral_signals: string[] | Array<{ signal: string; direction?: 'up' | 'down' | 'neutral'; impact?: string }>;
  lifecycle_context: string;
  potential_strategy: string;
  recommended_channel: string;
  relevant_case_studies?: CaseStudy[];
  evidence_strength: EvidenceStrength | string;
  rationale: string;
  limitations: string | string[];
  test_recommendation: string | TestRecommendationData;
  model_metadata?: {
    model_name?: string;
    version?: string;
    thresholds?: {
      high: number;
      medium: number;
    };
  };
}

export interface AggregateMetrics {
  total_customers: number;
  high_risk: number;
  medium_risk: number;
  low_risk: number;
  average_churn_probability: number;
  total_revenue_exposure: number;
  is_live?: boolean;
}

export interface ApiStatus {
  connected: boolean;
  checking: boolean;
  url: string;
  version?: string;
  lastChecked?: Date;
  error?: string;
}

export type ActiveTab = 'overview' | 'intelligence' | 'recommendations' | 'about';
