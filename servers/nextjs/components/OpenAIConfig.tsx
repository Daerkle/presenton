import { Input } from './ui/input';
import { Label } from './ui/label';

interface OpenAIConfigProps {
  openaiApiKey: string;
  onInputChange: (value: string, field: string) => void;
}

export default function OpenAIConfig({ openaiApiKey, onInputChange }: OpenAIConfigProps) {
  return (
    <div className="mb-8 space-y-2">
      <Label htmlFor="openai-api-key">
        OpenAI API Key
      </Label>
      <Input
        id="openai-api-key"
        type="text"
        value={openaiApiKey}
        onChange={(e) => onInputChange(e.target.value, "openai_api_key")}
        placeholder="sk-..."
        className="font-mono"
      />
      <p className="text-sm text-muted-foreground flex items-center gap-2">
        <span className="block w-1 h-1 rounded-full bg-muted-foreground"></span>
        Ihr API-Schlüssel wird lokal gespeichert und niemals geteilt
      </p>
    </div>
  );
} 