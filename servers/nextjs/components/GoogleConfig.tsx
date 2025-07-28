import { Input } from './ui/input';
import { Label } from './ui/label';

interface GoogleConfigProps {
  googleApiKey: string;
  onInputChange: (value: string, field: string) => void;
}

export default function GoogleConfig({ googleApiKey, onInputChange }: GoogleConfigProps) {
  return (
    <div className="mb-8 space-y-2">
      <Label htmlFor="google-api-key">
        Google API Key
      </Label>
      <Input
        id="google-api-key"
        type="text"
        value={googleApiKey}
        onChange={(e) => onInputChange(e.target.value, "google_api_key")}
        placeholder="AIzaSy..."
        className="font-mono"
      />
      <p className="text-sm text-muted-foreground flex items-center gap-2">
        <span className="block w-1 h-1 rounded-full bg-muted-foreground"></span>
        Ihr API-Schlüssel wird lokal gespeichert und niemals geteilt
      </p>
    </div>
  );
} 