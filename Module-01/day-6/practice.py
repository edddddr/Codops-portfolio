class Report:
    def __init__(self, content: str):
        self.content = content


class ReportBuilder:
    def __init__(self, raw_data: dict):
        self.raw_data = raw_data

    def build(self) -> Report:
        formatted_content = f"Summary: {self.raw_data.get('summary', '')}"
        return Report(formatted_content)
    

class ReportRepository:
    def __init__(self, storage_path: str):
        self.storage_path = storage_path

    def save(self, report: Report) -> None:
        with open(self.storage_path, "w") as f:
            f.write(report.content)


class ReportEmailer:
    def __init__(self, smtp_client):
        self.smtp_client = smtp_client

    def send(self, report: Report, recipient: str) -> None:
        pass